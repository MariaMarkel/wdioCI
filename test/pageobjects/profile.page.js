import Page from './page';

class ProfilePage extends Page {
    get userIcon () { return $('svg[data-icon="user"]') }
}

export default new ProfilePage();