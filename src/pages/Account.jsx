import React from 'react';
import {
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  ListButton,
} from 'framework7-react';

import './Account.less';
import avatarSrc from '../assets/avatar.jpeg';

const Account = () => (
  <Popup push swipeToClose="to-bottom" className="account-popup">
    <Page className="account-page">
      <Navbar title="Account">
        <Link popupClose slot="right">
          Done
        </Link>
      </Navbar>
      <List mediaList strong outline>
        <ListItem
          className="account-user"
          title="PJ"
          subtitle="prazmjou@gmail.com"
          chevronCenter
          link
        >
          <img slot="media" alt="PR" />
        </ListItem>
      </List>
      <List strong outline dividers>
        <ListItem title="Settings" link />
        <ListItem title="Location" link />
      </List>
      <List strong outline dividers>
        <ListButton>Change Password</ListButton>
        <ListButton>Edit Profile</ListButton>
        <ListButton>Logout</ListButton>
      </List>
      <List strong outline dividers>
        <ListItem title="Personalised Recommendations" link />
      </List>
    </Page>
  </Popup>
);

export default Account;
