import React, { Component } from 'react';
import { Jumbotron, Container, Media, Col, Row } from 'reactstrap';
import banner from './imgs/banner.jpg';
import spotlight1 from './imgs/spotlight01.jpg';
import spotlight2 from './imgs/spotlight02.jpg';
import spotlight3 from './imgs/spotlight03.jpg';
import logo from './imgs/LivingAncestryClock.png';
import logo2 from './imgs/LivingAncestryClock2.png';
import Info6 from './imgs/InfoComputer6.png';
import Info1 from './imgs/InfoComputer2.png';
import Info3 from './imgs/InfoComputer3.png';
import Info4 from './imgs/InfoComputer4.png';
import Info5 from './imgs/InfoComputer5.png';
import Info7 from './imgs/Infographic6.png';
import LivingAncestry_AI_Implications from './imgs/LivingAncestry_AI_Implications.mp4';
import UserStory from './imgs/UserStoryVideo.mp4';
import Demo from './imgs/LivingAncestryDemo.mp4';


export class Home extends Component {
	static displayName = Home.name;

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
			}).catch(error => {
				this.setState({
					signedUp: true
				})
            })

	}

	render() {
		return (

			<div id="wrapper" class="divided">

				<section class="spotlight style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
					<div class="content">
						<h1>What are we?</h1>
						<p class="major"> Imagine having access to <b style={{ fontStyle: 'italic' }}>generations</b> of memories and experiences <b style={{ fontStyle: 'italic' }}>created</b> by your family, relatives, and ancestors. Living Ancestry is a platform to build family trees but made of digital time capsules. We provide a service for you to <b style={{ fontStyle: 'italic' }}>preserve</b> your past, <b style={{ fontStyle: 'italic' }}>learn</b> about your family, and <b style={{ fontStyle: 'italic' }}>impact</b> the future.</p>
					</div>


					<video style={{ maxWidth: 800 }} controls>
						<source src={UserStory} type="video/mp4" />
					</video>
				</section>


				<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
					<div class="content">
						<h2>How It Works</h2>
						<p>The idea is for members of your family to each build out their own <b style={{ fontStyle: 'italic' }}>digital time capsules</b>, which will be stored in your <b style={{ fontStyle: 'italic' }}>family tree.</b> The digital time capsules can be accessed by members of the same tree. The goal is to <b style={{ fontStyle: 'italic' }}>expand</b> the family tree over time so that it becomes an archive of memories that any future generation can learn from. Our stories and experiences are important to us, so why let it be <b style={{ fontStyle: 'italic' }}>forgotten?</b></p>
					</div>

					<img class="image" style={{ backgroundImage: "url(" + banner + ")", maxHeight: 400 }} src={Info7} alt="" />

				</section>


				<section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
					<div class="content">
						<h2>Step 1: Build Out Your Digital Time Capsule</h2>
						<p>Document recipes, stories, music, fashion, etc, anything you find important. Users can upload audio files, PDFs, videos, pictures, or text to their time capsules. What will you <b style={{ fontStyle: 'italic' }}>pass down?</b></p>
						<ul class="actions stacked">
							<li><a onClick={() => this.props.history.push('/profile/allanla')} class="button">View Example Time Capsule</a></li>
						</ul>
					</div>

					<img class="image" src={Info3} style={{ backgroundImage: "url(" + spotlight2 + ")", maxHeight: 400 }} alt="" />

				</section>


				<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
					<div class="content">
						<h2>Step 2: Connect Your Family Tree</h2>
						<p>Users will be able to add other users to their family tree or join an existing family tree. Members of the tree will be able to view each other's digital time capsule. How much can you <b style={{ fontStyle: 'italic' }}>learn about your family?</b> How much can your family <b style={{ fontStyle: 'italic' }}>learn about you?</b></p>
						<ul class="actions stacked">
							<li><a onClick={() => this.props.history.push('/tree')} class="button">View Example Tree</a></li>
						</ul>
					</div>

					<img class="image" src={Info4} style={{ maxHeight: 400 }} alt="" />

				</section>

				<section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
					<div class="content">
						<h2>Step 3: Why Sign Up?</h2>
						<p>Living Ancestry's Mission is to help users <b style={{ fontStyle: 'italic' }}>learn about their family and inspire descendants.</b> We want users to be remembered for how they lived their lives. We all have so much wisdom and passion that we can share and pass down. Imagine descendants from your family tree generations from now. They would have access to all the digital time capsules left behind. <b style={{ fontStyle: 'italic' }}>What can they learn from yours?</b></p>
					</div>

					<img class="image" src={Info5} style={{ backgroundImage: "url(" + spotlight3 + ")", maxHeight: 500 }} alt="" />

				</section>

				<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
					<div class="content">
						<h1>A.I. Implications</h1>
						<p>Users will be able to opt into an AI Generated Content Service using the data in their time capsules to generate content. For example, users can leverge PDFs they have in their time capsules to generate content, in my case generated college advice. <b style={{ fontStyle: 'italic' }}>What can be generated from yours?</b></p>
					</div>

					<video style={{ maxWidth: 800 }} controls>
						<source src={LivingAncestry_AI_Implications} type="video/mp4" />
					</video>
				</section>

				<section hidden={this.state.signedUp} class="wrapper style1 align-center" style={{ textAlign: 'center', marginBottom: 20 }}>
					<Container style={{ paddingTop: 50, marginBottom: 10 }}>
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


				<section class="spotlight style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
					<div class="content">
						<h1>Demo Video</h1>
						<p class="major">The video shows a demo of what users will be able to create. Users will be able to create a family tree and digital time capsules like the ones from the video. Please sign up if you support this idea! Have more questions? Visit the FAQ page!</p>
						<ul class="actions stacked">
							<li><a onClick={() => this.props.history.push('/faq')} class="button">FAQ</a></li>
						</ul>
					</div>


					<video class="image" controls>
						<source src={Demo} type="video/mp4" />
					</video>
				</section>
			</div>
		);
	}
}
