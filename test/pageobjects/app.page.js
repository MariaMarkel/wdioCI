import Page from './page';

class AppPage extends Page {
    get userIcon () { return $('svg[data-icon="user"]') }

    // Navigation Menu
    get itemCourses () { return $('div[data-qa="topmenu-Courses"]') }

    openCoursesSection () {
        this.itemCourses.click();
    }
}

export default AppPage;