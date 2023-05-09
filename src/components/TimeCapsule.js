import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';

import { Stories } from './Stories';
import { Hobbies } from './Hobbies';
import { Travels } from './Travels';
import { Recipes } from './Recipes';

const CAPSULES = ['Stories', 'Hobbies', 'Travels', 'Recipes', 'Other'];

export class TimeCapsule extends Component {
    static displayName = Stories.name;
    constructor(props) {
        super(props);
        this.state = {
            openStories: true,
            openHobbies: true,
            openTravels: true,
            openRecipes: true,
            openOther: false
        };
    }

    render() {
        const toggle = (collapse) => {
            this.setState({ [collapse]: !this.state[collapse] });
        }

        return (
            <div>
                {CAPSULES.map(capsule => {
                    return (
                        <div>
                            <Button color="link" onClick={toggle.bind(this, `open${capsule}`)} style={{ border: 'none', boxShadow: 'none' }}>{capsule}</Button>
                            <Collapse isOpen={this.state[`open${capsule}`]}>
                                {capsule === 'Stories' &&
                                    <Stories />
                                }
                                {capsule === 'Hobbies' &&
                                    <Hobbies />
                                }
                                {capsule === 'Travels' &&
                                    <Travels />
                                }
                                {capsule === 'Recipes' &&
                                    <Recipes />
                                }
                                {capsule === 'Other' &&
                                    <p>My ______. Users will be able to add whatever topics they like to share, the power is in your hands. What will your profile be about? What can you pass down? Tutorials on how to sing? Recorded audio stories? The possibilities are endless. What can your family learn from your time capsule? What will you learn about your family? What can the future learn from your tree? The power is in your hands.</p>
                            }
                            </Collapse>
                        </div>
                    );
                })}
            </div>
        );
    }
}
