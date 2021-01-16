import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import CoursesPage from '../pageobjects/courses.page';

describe('Navigation', () => {
    let credentials = {
        username: "phoebe.buffae@gmail.com",
        password: "7896542"
    };

    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(credentials.username, credentials.password);
    });

    it('course section opens', () => {
        ProfilePage.openCoursesSection();
        expect(CoursesPage.jsPracticeCourse).toBeExisting();
    });
});