import React, { Component } from 'react';
import { Container, Col,Row } from 'reactstrap';

export class Mission extends Component {
	static displayName = Mission.name;
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
				if (response.status == 200) {
					this.setState({
						signedUp: true
					})
				}
			})

	}

    render() {
     
		return (
			<div>
			<section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
				
				<div class="cd-faq__items">					

					<ul id="basics" class="cd-faq__group">					
						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Mission 1</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{ color: 'black', fontSize: 16 }}>Living Ancestry's first mission is to <b>preserve an individual's legacy</b> by offering a platform to create and personalize one's digital time capsule. Users will be able to foster and create impact for their family and descendants through a connected network of digital time capsule's built overtime.</p>
								</div>
							</div> 
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Mission 2</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{ color: 'black', fontSize: 16 }}>The second mission of Living Ancestry is to <b>inspire users</b> who are connected to their network of digital time capsules to <b>learn more about their family, who they are, where they came from.</b> Descendants will be motivated or inspired by these digital time capsules, so that they too will eventually craft their own time capsule, adding on to the growing network of digital time capsules to inspire the next generation.</p>
								</div>
							</div> 
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Mission 3</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{ color: 'black', fontSize: 16 }}>The third mission of Living Ancestry is to <b>encourage and contribute to family relationships</b> by acting as a Family Social Media and Networking Platform.</p>
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
				</div>
        );
    }
}