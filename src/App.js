import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Tree } from './components/Tree';
import { Stories } from './components/Stories';
import { College } from './components/College';
import { American } from './components/American';
import { Hobbies } from './components/Hobbies';
import { Breaking } from './components/Breaking';
import { Snowboarding } from './components/Snowboarding';
import { Travels } from './components/Travels';
import { Recipes } from './components/Recipes';
import { Chinatown } from './components/Chinatown';
import { BunRieu } from './components/BunRieu';
import { FAQ } from './components/FAQ';
import { Mission } from './components/Mission';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout style={{ height: '100%' }}>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/profile/allanla/stories' component={Stories} />
            <Route exact path='/profile/stories/college' component={College} />
            <Route exact path='/profile/stories/american' component={American} />
            <Route exact path='/profile/allanla/hobbies' component={Hobbies} />
            <Route exact path='/profile/hobbies/breaking' component={Breaking} />
            <Route exact path='/profile/hobbies/snowboarding' component={Snowboarding} />
            <Route exact path='/profile/allanla/travels' component={Travels} />
            <Route exact path='/profile/travels/chinatown' component={Chinatown} />
            <Route exact path='/profile/allanla/recipes' component={Recipes} />
            <Route exact path='/profile/recipes/BunRieu' component={BunRieu} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/mission' component={Mission} />
            <Route exact path='/tree'
                render={(props) => <Tree {...props} />} />
      </Layout>
    );
  }
}
