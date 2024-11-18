<footer>
	<div id="back-to-top">
		<img src="/images/SVG/back-to-top.svg" alt="back-to-top" />
	</div>

	<section class="top">
		<div class="full-bg-img">
			<img alt="hero-bg" src="../images/footer-bg.png" />
		</div>
		
		<div class="container absolute">
			<div class="flex-row">
				<div class="flex-col">
					<div>
						<h2>LET'S TALK</h2>
						<h3>WITH OUR COUNSELLORS TODAY!</h3>
					</div>
					<p>Take the next step towards reaching your creative dreams!</p>
				</div>

				<div class="flex-col">
					<a href="/connect/enquiry">
						<button class="button">Connect With Us</button>
					</a>

					<a href="/connect/enquiry?type=fee">
						<button class="button">Fees Enquiry</button>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container bottom">
			<div class="flex-row">
				<div class="flex-col">
					<!-- <a href="https://event.toa.edu.my/infoday/pg/" target="_blank">
						<li>The One Academy Penang</li>
					</a> -->
					<a href="https://studentbs.toa.edu.my/" target="_blank">
						<li>Student Portal</li>
					</a>
					<a href="https://library.toa.edu.my" target="_blank">
						<li>Library Portal</li>
					</a>
					<a class="sun-ex" href="/connect/virtual-tour/" target="_blank">
						<li>Virtual Tour</li>
					</a>
					<a href="/connect/enquire-now?type=ebro">
						<li>Request e-Brochure</li>
					</a>
					<a href="/about/news">
						<li>News & Events</li>
					</a>
				</div>

				<div class="flex-col">
					<div class="footer-block">
						<h4>The One Academy (Bandar Sunway Campus)</h4>

						<p>
							Block B4, Leisure Commerce Square,<br />No. 9, Jalan PJS 8/9,<br />46150
							Petaling Jaya, Selangor, Malaysia.
						</p>

						<ul>
							<a href="tel:+603-7875 5510">
								<li>T +603-7875 5510</li>
							</a>
							<a href="mailto:info@toa.edu.my">
								<li>E info@toa.edu.my</li>
							</a>

							<a href="/?location=sunway">
								<li>
									URL <span class="anchor-color">The One Academy Sunway</span>
								</li>
							</a>
						</ul>
					</div>

					<div class="footer-block">
						<h4>The One Academy (Penang Campus)</h4>

						<p>No. 33, Jalan Anson,<br />10400 Penang, Malaysia.</p>

						<ul>
							<a href="tel:+604-210 3000">
								<li>T +604-210 3000</li>
							</a>
							<a href="mailto:penang@toa.edu.my">
								<li>E penang@toa.edu.my</li>
							</a>

							<a href="/?location=penang">
								<li>
									URL <span class="anchor-color">The One Academy Penang</span>
								</li>
							</a>
						</ul>
					</div>
				</div>

				<div class="flex-col">
					<div class="flex-row icons">
						<a
							id="mod-foot-fb"
							href="https://www.facebook.com/toa.edu.my/"
							target="_blank"
						>
						</a>
						<a
							id="mod-foot-ig"
							href="https://www.instagram.com/theoneacademy/?hl=en"
							target="_blank"
						>
						</a>
						<a
							id="mod-foot-yt"
							href="https://www.youtube.com/user/theoneacademy"
							target="_blank"
						>
						</a>
						<a
							id="mod-foot-wa"
							href="https://api.whatsapp.com/send?phone=+60125510639&text=Hi, I would like to enquire about The One Academy."
							target="_blank"
						>
						</a>
					</div>
					<!-- ©
					<script>
						document.write(new Date().getFullYear());
					</script>
					The One Academy -->
				</div>
			</div>
		</div>

		<div class="copyright">
			<div class="flex-row">
				<div>
					Copyright ©
					<script>
						document.write(new Date().getFullYear());
					</script>
					<span id="copyright">
						The One Academy Of Communication Design Sdn. Bhd. 199101000237
						(210547-P) DK092 (B).
					</span>
					All rights reserved.
				</div>

				<div class="flex-row" style="gap: 1rem">
					<a target="_blank" href="/connect/privacy-policy">Privacy Policy</a>
					|
					<a target="_blank" href="/connect/term-of-use">Term of Use</a>
					|
					<a target="_blank" href="/connect/return-policy"
						>Fund Return Policy</a
					>
				</div>
			</div>
		</div>
	</section>
</footer>

<style>
img {
	user-select: none;

	/* drag */
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	user-drag: none;
}

section {
	position: relative;
}

.container {
	width: var(--optimalWidth);
	margin: 0 auto;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: var(--defaultFontSize);
	/* overflow: hidden; */
}

.flex-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.absolute {
	position: absolute;
}
	
footer {
	font-size: var(--defaultFontSize);
	color: var(--textWhite);
}

footer h2 {
	font-size: var(--fontSizeHuge);
}

footer h3 {
	font-size: var(--fontSizeMedium);
	font-weight: normal;
}

footer .absolute {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

footer .top .flex-row {
	justify-content: space-between;
}

.flex-row {
	display: flex;
}

footer .absolute {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

footer .top .flex-col {
	gap: 1rem;
}

footer .bottom {
	padding: 3rem 0;
}

footer .bottom .flex-row {
	justify-content: space-between;
}

footer .bottom .flex-col {
	justify-content: start;
	gap: 2rem;
}

.footer-block h4 {
	color: var(--bgLogo);
	font-weight: normal;
}

.footer-block ul,
.footer-block h4,
.footer-block p {
	margin-bottom: 0.8rem;
}

footer .full-bg-img img {
	height: auto;
	width: 100vw;
	display: block;
	max-width: unset;
}

.full-bg-img img {
	width: 100vw;
	display: block;
}

footer .bottom .flex-col:last-child {
	justify-content: flex-start;
}

footer .icons {
	gap: 1rem;
}

footer .top a > button {
	width: 100%;
}

footer .top a {
	width: 100%;
}

.copyright {
	background-color: #1e1e1e;
	color: var(--textGrey);
	text-align: center;
	padding: 1rem 3rem;
}

.copyright .flex-row {
	justify-content: space-between;
}

.copyright {
	background-color: #1e1e1e;
	color: var(--textGrey);
	text-align: center;
	padding: 1rem 3rem;
}

@media only screen and (max-width: 1366px) {
	:root {
		--fontSizeHuge: 2.5rem;
		--fontSizeBig: 1.8rem;
		--fontSizeMedium: 1.3rem;
		--fontSizeOK: 1.1rem;

		touch-action: pan-x pan-y;
	}
}
</style>
