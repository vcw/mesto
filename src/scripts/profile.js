class Profile {
  constructor(api) {
    api.getMyInfo()
      .then((userInfo) => {
        this.profileInfo = userInfo;
        this.render();
      })
      .catch((error) => {
        console.log(error);
      });
    const editButton = document.querySelector('.user-info__edit-button');

    editButton.addEventListener('click', this.handleEditProfileButtonClick.bind(this));
  }

  update(newInfo) {
    api.editMyInfo(newInfo)
      .then((userInfo) => {
        this.profileInfo = userInfo;
        this.render();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const nameContainer = document.querySelector('.user-info__name');
    const jobContainer = document.querySelector('.user-info__job');
    const avatarContainer = document.querySelector('.user-info__photo')

    nameContainer.textContent = this.profileInfo.name;
    jobContainer.textContent = this.profileInfo.job;
    avatarContainer.style.backgroundImage = `url(${this.profileInfo.avatar})`;
  }

  handleEditProfileButtonClick() {
    this.popup = new FormPopup({ type: 'edit-profile', inputValues: {...this.profileInfo} });
    this.popup.open();

    this.popup.form.addEventListener('submit', this.handleProfileUpdate.bind(this));
  }

  handleProfileUpdate(event) {
    event.preventDefault();
    const { name, job } = event.target.elements;
    
    this.update({ name: name.value, job: job.value, avatar: this.profileInfo.avatar});
    this.popup.close();
  }
}
