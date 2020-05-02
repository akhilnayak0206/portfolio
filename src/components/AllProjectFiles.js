//{ this is how the objects must be entered
//   id: 'anyID', //(optional)
//   title: 'any Title',  //(required)
//   image:
//     'https://anySite/anyImage.png', //(required)
//   description:
//     'anyDescription', //(optional)
// code: 'https://linkToYourProject', //(required)
//   imgArray: [
//     {
//       src: 'https://anySite/anyImage1.png'
//     },
//     {
//       src: 'https://anySite/anyImage2.png'
//     },
//     {
//       src: 'https://anySite/anyImage3.png'
//     }] //(required)
// }

const allProjectFiles = [
  {
    id: 'dev-forum',
    title: 'Dev Forum',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730539/Dev%20Forum/web/homePageWeb.png',
    description:
      'This is a website for developers to share post, find other developers or ask questions from developers.',
    code: 'https://github.com/akhilnayak0206/devforum',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730539/Dev%20Forum/web/homePageWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730535/Dev%20Forum/web/RegisterWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730534/Dev%20Forum/web/loginWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730534/Dev%20Forum/web/developerWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730535/Dev%20Forum/web/viewProfile1.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730536/Dev%20Forum/web/viewProfile2.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730536/Dev%20Forum/web/viewProfile3.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730534/Dev%20Forum/web/dashboardWeb1.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730535/Dev%20Forum/web/dashboardWeb2.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730535/Dev%20Forum/web/postsWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730535/Dev%20Forum/web/postsDiscussionWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730534/Dev%20Forum/mobile/homepageMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730534/Dev%20Forum/mobile/SignupMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/loginMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/EditProfileMobile1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/EditInfoMobile2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/EditProfileMobile3.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/DevelopersMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/dashboardMobile1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730532/Dev%20Forum/mobile/dashboardMobile2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730532/Dev%20Forum/mobile/createPostMobile1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/createPostMobile2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730532/Dev%20Forum/mobile/AddExperienceMobile1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730532/Dev%20Forum/mobile/AddExperience2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730532/Dev%20Forum/mobile/addEducationMobile2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730532/Dev%20Forum/mobile/AddCommentMobile1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730531/Dev%20Forum/mobile/AddCommentMobile2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730533/Dev%20Forum/mobile/DeleteComment.jpg',
      },
    ],
  },
  {
    id: 'healthCare-monitoring-app',
    title: 'CareBuddy App',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/1loginPage.jpg',
    description: `This project is an app and a device to get realtime update about the patient's condition`,
    code: 'https://github.com/akhilnayak0206/healthCareMonitoringApp',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/1loginPage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/2heartRateCaretaker.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/3gpsCaretaker.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740706/Alzheimer%20App/screenshots/4gamesCaretaker1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740707/Alzheimer%20App/screenshots/5gamesCaretaker2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740706/Alzheimer%20App/screenshots/6gamesCaretaker3.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740711/Alzheimer%20App/screenshots/7doctorsInfoCaretaker1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740707/Alzheimer%20App/screenshots/8doctorsInfoCaretaker2.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740707/Alzheimer%20App/screenshots/9editProfileCaretaker.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740704/Alzheimer%20App/screenshots/10remainderCaretaker.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740704/Alzheimer%20App/screenshots/11remainderCaretaker.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740704/Alzheimer%20App/screenshots/12remainderCaretaker.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740704/Alzheimer%20App/screenshots/12remainderCaretaker-1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740704/Alzheimer%20App/screenshots/13allPatientsDoctor.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740704/Alzheimer%20App/screenshots/14patientDoctor.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/15heartDoctor.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/16profilePatientDoctor.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/17editProfileDoctor.jpg',
      },
    ],
  },
  {
    id: 'got-battle-website',
    title: 'GoT Battle Website',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656782/GoT%20web%20app/screenshot/Web%20Screenshot/1homePageWeb.png', // change
    description:
      'This is a website to search for battles based on location, then search for for the battle and then see who won or lost and then get full details of that battle.',
    code: 'https://github.com/akhilnayak0206/GoT-Battle-Web-App', //change
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656782/GoT%20web%20app/screenshot/Web%20Screenshot/1homePageWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656781/GoT%20web%20app/screenshot/Web%20Screenshot/2autocompleteWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656782/GoT%20web%20app/screenshot/Web%20Screenshot/3allBatlesWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656790/GoT%20web%20app/screenshot/Web%20Screenshot/4detailsWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656789/GoT%20web%20app/screenshot/Web%20Screenshot/5detailsModalWeb.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656781/GoT%20web%20app/screenshot/Mobile%20Screenshot/1homePageMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656780/GoT%20web%20app/screenshot/Mobile%20Screenshot/2autocompleteMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656781/GoT%20web%20app/screenshot/Mobile%20Screenshot/3allBattlesMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656783/GoT%20web%20app/screenshot/Mobile%20Screenshot/4detailsMobile.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656781/GoT%20web%20app/screenshot/Mobile%20Screenshot/5DetailsModalMobile.jpg',
      },
    ],
  },
  {
    id: 'to-do-app',
    title: 'To - Do App',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656752/To-Do%20List%20Expo/ScreenShots/Task_List_Page.png',
    description:
      'This is an app to make a simple todo list where they can filter and delete.',
    code: 'https://github.com/akhilnayak0206/To-Do-App',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656752/To-Do%20List%20Expo/ScreenShots/Task_List_Page.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656743/To-Do%20List%20Expo/ScreenShots/AddToDo.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656747/To-Do%20List%20Expo/ScreenShots/ChangeStatus1.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656747/To-Do%20List%20Expo/ScreenShots/DetailsTask1.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656750/To-Do%20List%20Expo/ScreenShots/DetailsTask2.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656747/To-Do%20List%20Expo/ScreenShots/DetailsTask3.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656749/To-Do%20List%20Expo/ScreenShots/FilterTask1.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656751/To-Do%20List%20Expo/ScreenShots/FilterTask2.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656750/To-Do%20List%20Expo/ScreenShots/FilterTask3.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656751/To-Do%20List%20Expo/ScreenShots/DeleteTask1-1.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580656750/To-Do%20List%20Expo/ScreenShots/DeleteTask1-2.png',
      },
    ],
  },
  {
    id: 'rajhans-dashboard',
    title: 'Rajhans Dashboard',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617982/Dashboard%20Online/desktop/1-LoginPage.png',
    description:
      'This is a website where members can see receive donation and see the expenses and get overview in chart',
    code: 'https://github.com/akhilnayak0206/RajhansDashboard',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617982/Dashboard%20Online/desktop/1-LoginPage.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617983/Dashboard%20Online/desktop/2-HomePage.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617983/Dashboard%20Online/desktop/3-HomePage.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617984/Dashboard%20Online/desktop/4-HomePage.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617983/Dashboard%20Online/desktop/6-AddWingDonor.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617984/Dashboard%20Online/desktop/7AddWingDonor.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617984/Dashboard%20Online/desktop/8AddWellWisher.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617985/Dashboard%20Online/desktop/9-AddWellWisher.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/desktop/10-AddWellWisher.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/desktop/11-WellWisher.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617978/Dashboard%20Online/desktop/12-Expenses.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617978/Dashboard%20Online/desktop/13-Expenses.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617980/Dashboard%20Online/desktop/14-Users.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617980/Dashboard%20Online/desktop/15-Users.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617979/Dashboard%20Online/desktop/16-Download.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617979/Dashboard%20Online/desktop/17-Download.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617980/Dashboard%20Online/desktop/18-BankBook.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617981/Dashboard%20Online/desktop/19-BankBook.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617982/Dashboard%20Online/desktop/20-Reset.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617982/Dashboard%20Online/desktop/21-Account.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617986/Dashboard%20Online/desktop/22-SignOut.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617982/Dashboard%20Online/desktop/23-Public_Page.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617986/Dashboard%20Online/mobile/1-LoginPage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/mobile/2-AccountPage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617979/Dashboard%20Online/mobile/3-AccountPage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617979/Dashboard%20Online/mobile/4-Home.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617979/Dashboard%20Online/mobile/5-Home.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617979/Dashboard%20Online/mobile/6-Home.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617980/Dashboard%20Online/mobile/7-Home.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617980/Dashboard%20Online/mobile/8-Home.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617980/Dashboard%20Online/mobile/9-Home.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617984/Dashboard%20Online/mobile/10-Wing.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617984/Dashboard%20Online/mobile/11-Wing.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617985/Dashboard%20Online/mobile/12-WellWisher.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617985/Dashboard%20Online/mobile/13-WellWisher.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617985/Dashboard%20Online/mobile/14-User.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617985/Dashboard%20Online/mobile/15-User.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617986/Dashboard%20Online/mobile/16-Expense.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617985/Dashboard%20Online/mobile/17-Database.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/mobile/18-Database.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/mobile/19-Account.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/mobile/20-Account.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/mobile/21-Account.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617977/Dashboard%20Online/mobile/22-Account.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617978/Dashboard%20Online/mobile/23-Download.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617978/Dashboard%20Online/mobile/24-Signout.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617978/Dashboard%20Online/mobile/25-Public_Page.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587617978/Dashboard%20Online/mobile/26-Receipt.jpg',
      },
    ],
  },
  {
    id: 'book-library-graphql',
    title: 'Book-Library',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553724/Book-Library-GraphQL/desktop/1-HomePage.png',
    description:
      'This is a website where you can find books and details of authors and their books',
    code: 'https://github.com/akhilnayak0206/book-library-graphql',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553724/Book-Library-GraphQL/desktop/1-HomePage.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553724/Book-Library-GraphQL/desktop/2-AddBooks.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553724/Book-Library-GraphQL/desktop/3-Details.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553725/Book-Library-GraphQL/mobile/1-HomePage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553725/Book-Library-GraphQL/mobile/2-AddBook.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1587553725/Book-Library-GraphQL/mobile/3-Details.jpg',
      },
    ],
  },
  {
    id: 'donation-app',
    title: 'Donation App',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742999/rajhans%20App/Android%20App/1loginPage.jpg',
    description:
      'This is a donation app where the user of the app can make receipt for the donations. All the members will get real time updates and can check the expense and total donation in app.',
    code: 'https://github.com/akhilnayak0206/RajhansApp',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742999/rajhans%20App/Android%20App/1loginPage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580743000/rajhans%20App/Android%20App/2hompage.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742999/rajhans%20App/Android%20App/3drawer.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742999/rajhans%20App/Android%20App/4expense.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742999/rajhans%20App/Android%20App/5expensedetails.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580743000/rajhans%20App/Android%20App/6deleteExpense.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580743004/rajhans%20App/Android%20App/7deleteexpense.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580743000/rajhans%20App/Android%20App/8addExpense.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580743000/rajhans%20App/Android%20App/9wellWishers.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580743000/rajhans%20App/Android%20App/10Receipt.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742998/rajhans%20App/Android%20App/11shareReceipt.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742998/rajhans%20App/Android%20App/12deleteRecords.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580793990/rajhans%20App/Android%20App/13overView.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742998/rajhans%20App/Android%20App/13resetDatabase.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580742998/rajhans%20App/Android%20App/14signOut.jpg',
      },
    ],
  },
  {
    id: 'url-shorten-website',
    title: 'URL Shorten Website',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730496/URL-shortened/web/homepage.png',
    description:
      'In this website the user enters a URL and receives a shortened URL.',
    code: 'https://github.com/akhilnayak0206/url-shortener', //change
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730496/URL-shortened/web/homepage.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730497/URL-shortened/web/shortenedPC.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730495/URL-shortened/mobile/urlmobile1.jpg',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730495/URL-shortened/mobile/urlmobile2.jpg',
      },
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1560499239/portfolio.png',
    description:
      'This is my portfolio where the user will be greeted according to the time of the day. This site  is  hosted with the help of Git',
    code: 'https://github.com/akhilnayak0206/portfolio',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1560499239/portfolio.png',
      },
    ],
  },
  {
    id: 'airbnb-clone',
    title: 'Airbnb-Clone',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1560496699/airbnb-clone_ss.png',
    description:
      'This is a website where you can find cost of rooms on the map or search by name',
    code: 'https://github.com/akhilnayak0206/airbnb-clone',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1560496699/airbnb-clone_ss.png',
      },
    ],
  },
  {
    id: 'sketch-on-image',
    title: 'Sketch-on-Image',
    image:
      'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1588423741/sketch%20on%20image/screely-1588423725696.png',
    description: 'This is a website where you can sketch on image',
    code: 'https://github.com/akhilnayak0206/sketch-on-image/',
    imgArray: [
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1588423740/sketch%20on%20image/screely-1588423507548.png',
      },
      {
        src:
          'https://res.cloudinary.com/dx0wpoeyu/image/upload/v1588423741/sketch%20on%20image/screely-1588423725696.png',
      },
    ],
  },
];

export default allProjectFiles;
