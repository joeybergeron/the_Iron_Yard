////////////////////////////////////
//                      _      _  //
//                     | |    | | //
//  _ __ ___   ___   __| | ___| | //
// | '_ ` _ \ / _ \ / _` |/ _ \ | //
// | | | | | | (_) | (_| |  __/ | //
// |_| |_| |_|\___/ \__,_|\___|_| //
//                                //
////////////////////////////////////
EtsyListing = Backbone.Model.extend({
    urlRoot: '/listing/',
    initialize: function() {
        this.view = new ListingView({
            model: this
        });  
    }
});
/////////////////////////////////////////////////
//            _ _           _   _              //
//           | | |         | | (_)             //
//   ___ ___ | | | ___  ___| |_ _  ___  _ __   //
//  / __/ _ \| | |/ _ \/ __| __| |/ _ \| '_ \  //
// | (_| (_) | | |  __/ (__| |_| | (_) | | | | //
//  \___\___/|_|_|\___|\___|\__|_|\___/|_| |_| //
//                                             //
///////////////////////////////////////////////// 
EtsyListings = Backbone.Collection.extend({
    url: function() {
        return 'https://openapi.etsy.com/v2/listings/active.js?api_key=' + this.api_key + '&includes=MainImage' + '&callback=?'
    },
    parse: function(resp, xhr) {
        return _.filter(resp.results, function(listing){
            return !!listing.price; || !!listing.MainImage;
        });
    },
    model: EtsyListing,
    api_key: "7okfvpf465wxeoopuib7qgbe",
    query: 'backbone.js tutorials'
});

Listings = new EtsyListings();

Listings.fetch({
    success: function (listings) {
        console.log(listings.toJSON());
    }
});
/////////////////////////////
//        _                //
//       (_)               //
// __   ___  _____      __ //
// \ \ / / |/ _ \ \ /\ / / //
//  \ V /| |  __/\ V  V /  //
//   \_/ |_|\___| \_/\_/   //
//                         //
/////////////////////////////                        

ListingView = Backbone.View.extend({
    initialize: function(){
        $('body').append(this.el);
        this.render();
        this.model.view = this;
    },
    tagName: 'div',
    className: 'listing',
    render: function() {
    var data = _.extend({}, this.model.attributes);
    this.el.innerHTML = this.template(data);
    },
    template: _.template('<a href="<%= url %>"><img src="<%= MainImage.url_570xN %>"></a><h3><%= title %></h3><h2><%= price %></h2>'),
});

