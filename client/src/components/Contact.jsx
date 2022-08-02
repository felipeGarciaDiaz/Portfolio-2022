import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";

import socket from "./utils/socket";

function Contact(props) {
	let [isMessagePending, setIsMessagePending] = useState(true);

	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	let [msgResp, setMsgResp] = useState({
		title: null,
		description: null,
	});

	let [showButton, setShowButton] = useState("none");

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		setMsgResp({
			title: "Message Sent!",
			description:
				"Thank you! I will review this message as soon as possible, and reach back to you. In the mean time, feel free to review my projects and my github!",
		});

		setIsMessagePending(false);

		event.preventDefault();
		socket.emit("request-send-message", data);

		socket.on("reject-message", () => {
			setMsgResp({
				title: "Message Rejected!",
				description:
					"Unfortunately your message was not sent, make sure you are using your correct email, name, and that your message is more then just one sentence. Your Phone Number is optional.",
			});
			setShowButton("inline-block");
		});
		setData({ name: "", email: "", phone: "", message: "" });
	};

	const handleRetry = () => {
		setIsMessagePending(true);
	};
	if (isMessagePending) {
		return (
			<React.Fragment>
				<Bounce right>
					<div id='contact-base' className='container'>
						<div id='contact-form' className='row'>
							<div className='col s12 m12 l12'>
								<form onSubmit={handleSubmit}>
									<h1 id='contact-title' className='center-align'>
										Contact Me
									</h1>
									<div className='col s6 offset-s3'>
										<input
											name='name'
											id='name-form'
											type='text'
											className='browser-default'
											placeholder='Name'
											value={data.name}
											onChange={handleChange}
										></input>
									</div>
									<div className='col s6 offset-s3'>
										<input
											name='email'
											id='email-form'
											type='email'
											className='browser-default'
											placeholder='Email'
											value={data.email}
											onChange={handleChange}
										></input>
										<input
											name='phone'
											id='phone-form'
											type='phone'
											className='browser-defaul'
											placeholder='Phone Number'
											value={data.phone}
											onChange={handleChange}
										></input>
									</div>

									<div className='col s6 offset-s3'>
										<h6 className='center-align'>
											<textarea
												name='message'
												id='message-form'
												rows='7'
												placeholder='message here'
												value={data.message}
												onChange={handleChange}
											></textarea>
											<input
												id='submit-form'
												type='submit'
												value='Send Message'
											/>
										</h6>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Bounce>
			</React.Fragment>
		);
	} else if (!isMessagePending) {
		return (
			<React.Fragment>
				<Bounce left>
					<div id='contact-base' className='container'>
						<div id='contact-form' className='row'>
							<div className='col s12 m12 l12'>
								<h3 id='sent-title' className='center-align'>
									{msgResp.title}
								</h3>
								<h5 id='sent-desc' className='center-align'>
									{msgResp.description}
								</h5>
								<h5 className='center-align'>
									<button
										id='submit-form'
										style={{
											display: showButton,
											backgroundColor: "#FFBA30",
											color: "#4D4D4D",
										}}
										onClick={handleRetry}
									>
										Resend
									</button>
								</h5>
							</div>
						</div>
					</div>
				</Bounce>
			</React.Fragment>
		);
	}
}

export default Contact;
