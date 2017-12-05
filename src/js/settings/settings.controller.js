class SettingsCtrl {
  constructor(User, FavoriteTags,  $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this._FavoriteTags = FavoriteTags;
    this.formFavoriteTagsArray = [];
    this.formFavoriteTag =  '';

    this.formData = {
      email: User.current.email,
      bio: User.current.bio,
      image: User.current.image,
      username: User.current.username,
      favoriteTags: User.current.favoriteTags || []
    }

    FavoriteTags.getFavorites().then((res) => {
      this.formData.favoriteTags = res
    });
    

    this.logout = User.logout.bind(User);

  }

  submitForm() {
    this.isSubmitting = true;
    console.log(this.formData)
    this._User.update(this.formData).then(
      (user) => {
        this._$state.go('app.profile.main', {username:user.username})
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }

  addFavorite() {
    this.formData.favoriteTags.push(this.formFavoriteTag)
  }

}

export default SettingsCtrl;
