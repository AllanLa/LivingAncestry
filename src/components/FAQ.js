import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

export class FAQ extends Component {
    static displayName = FAQ.name;
    constructor(props) {
        super(props);        
		this.state = {
			signedUp: false
		}
	}



	signUp = () => {
		var submitData = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			comments: document.getElementById("comments").value
		}

		fetch("/api/signup/storeUser", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(submitData)
		})
			.then(response => {
				this.setState({
					signedUp: true
				})
			})

	}

    render() {
		window.scrollTo(0, 0)
		return (
			<div>
			<section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
				

				<div class="cd-faq__items">
					<ul id="basics" class="cd-faq__group">					
						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>How can I build the tree?</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{color: 'black', fontSize: 16}}>Users will be able to invite other users to the tree or join an existing tree. If a user joins a tree and is already part of an existing tree, the trees will combine becoming a single tree. Thus members of the tree will be able to view the time capsules of the added user as well as all the members of the added user's tree. You will be able to learn so much about relatives you may have never known about.</p>
								</div>
							</div> 
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Who can view my time capsule?</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{color: 'black', fontSize: 16}}>Only users part of your tree can view your <b>public digital time capsule.</b> Users will also be able to build their own <b>private digital time capsule</b> that only they can access. There can be a feature added where you can share your public digital time capsule to friends, however they will not be able to access other time capsules from your tree.</p>
								</div>
							</div> 
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Can I make time capsules for other people?</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{color: 'black', fontSize: 16}}>Yes! You will be able to make and manage time capsules in lieu of other family members. You will be able to add these time capsules to the tree. Members of the tree will be able to view this time capsule.</p>
								</div>
							</div>
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>What can I put in the digital time capsule?</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{color: 'black', fontSize: 16}}>If it can be uploaded, it can be in the time capsule. The idea is to give users the freedom and creativity to put anything they like in their time capsule.</p>
								</div>
							</div>
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>When will the beta be released?</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{ color: 'black', fontSize: 16 }}>We want to start building the platform as soon as possible! However we need enough people to <b>sign up</b> for the beta release. Please share this with your friends and family to help us get the ball rolling!</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section hidden={this.state.signedUp} class="wrapper style1 align-center" style={{ textAlign: 'center', marginBottom: 20 }}>
				<Container style={{ paddingTop: 20, marginBottom: 20 }}>
					<h2>Help Us, Help You. If you support the idea of Living Ancestry, please sign up for the beta release to make this project a reality. Let's be apart of something larger.</h2>
				</Container>
				<div class="inner medium" style={{ marginTop: 0 }}>
					<Col>
						<Row >
							<div class="field" >
								<label style={{ float: "left" }} for="name">Name</label>
								<input type="text" name="name" id="name" />
							</div>

							<div  >
								<label style={{ float: "left" }} for="email">Email</label>
								<input type="email" name="email" id="email" />
							</div>
						</Row>
						<div style={{ marginTop: 10, marginLeft: 15 }} class="field">
							<label style={{ float: "left" }} for="comments">Comments</label>
							<textarea name="comments" placeholder="Not required but feel free to share your thoughts!" id="comments" rows="6"></textarea>
						</div>
						<button style={{ marginTop: 20 }} onClick={() => this.signUp()}>Sign me up!</button>
						</Col>		
				</div>
				</section>
				<section hidden={!this.state.signedUp} class="wrapper style1 align-center" style={{ textAlign: 'center', marginBottom: 20 }}>
					<Container style={{ paddingTop: 20, marginBottom: 20 }}>
						<h2>THANK YOU SO MUCH FOR YOUR SUPPORT! Please feel free to follow Living Ancestry's social media for updates! Please feel free to share this with your family and friends as well! We really appreciate your help making Living Ancestry possible!</h2>
					</Container>
				</section>
		</div >
        );
    }
}
