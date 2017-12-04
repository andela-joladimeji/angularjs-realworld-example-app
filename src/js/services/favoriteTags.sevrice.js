export default class FavoriteTags {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;


    this.favoriteTags = [];

  }

  addFavorites(favoriteTags) {
    return this._$http({
      url:  `${this._AppConstants.api}/favoriteTags`,
      method: 'POST',
      data: {
        favoriteTags: favoriteTags
      }
    }).then((res) => res.data.favoriteTags);

  }

  getFavorites() {

    return this._$http({
      url:  `${this._AppConstants.api}/favoriteTags`,
      method: 'GET',
    }).then((res) => {
      console.log(res.data.favoriteTags)
      this.favoriteTags = res.data.favoriteTags
      return res.data.favoriteTags;
    });

  }


}