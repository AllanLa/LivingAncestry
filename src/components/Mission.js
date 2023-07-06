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
				this.setState({
					signedUp: true
				})
			})

	}

    render() {
     
		return (
			<div>
			<section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
				
				<div class="cd-faq__items">					

						<ul id="basics" class="cd-faq__group">				

							<li class="cd-faq__item">
								<a class="cd-faq__trigger" ><span><b>Main Mission</b></span></a>
								<div class="cd-faq__content">
									<div class="text-component">
										<p style={{ color: 'black', fontSize: 16 }}>Living Ancestry's main mission is to <b>foster digital generational wealth</b> for our users and their descendants.</p>
									</div>
								</div>
							</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Mission 2</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{ color: 'black', fontSize: 16 }}>Living Ancestry's second mission is to help <b>facilitate</b> users to create meaningful and impactful digital time capsules.</p>
								</div>
							</div> 
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Mission 3</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
										<p style={{ color: 'black', fontSize: 16 }}>The third mission of Living Ancestry is to <b>empower</b> descendants to harness the digital time capsules left behind.</p>
								</div>
							</div> 
						</li>

						<li class="cd-faq__item">
							<a class="cd-faq__trigger" ><span><b>Mission 4</b></span></a>
							<div class="cd-faq__content">
								<div class="text-component">
									<p style={{ color: 'black', fontSize: 16 }}>The fourth mission of Living Ancestry is to <b>encourage and contribute to family relationships</b> by acting as a Family Social Media and Networking Platform.</p>
								</div>
							</div>
							</li>

							<li class="cd-faq__item">
								<a class="cd-faq__trigger" ><span><b>Mission 5</b></span></a>
								<div class="cd-faq__content">
									<div class="text-component">
										<p style={{ color: 'black', fontSize: 16 }}>The fifth mission of Living Ancestry is to <b>prioritize data security</b> and provide users with robust control and management over their information.</p>
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
