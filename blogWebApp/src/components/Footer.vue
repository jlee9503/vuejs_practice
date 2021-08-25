<template>
	<footer>
		<div class="container">
			<div class="section__left">
				<div class="col-1">
					<router-link :to="{ name: 'Home' }" class="link-light logo__title"
						>Blog Site</router-link
					>
					<ul>
						<li>
							<a href="#"
								><font-awesome-icon
									class="social-icon"
									:icon="['fab', 'instagram']"
									size="lg"
							/></a>
						</li>
						<li>
							<a href="#"
								><font-awesome-icon
									class="social-icon"
									:icon="['fab', 'twitter']"
									size="lg"
							/></a>
						</li>
						<li>
							<a href="#"
								><font-awesome-icon
									class="social-icon"
									:icon="['fab', 'youtube']"
									size="lg"
							/></a>
						</li>
						<li>
							<a href="#"
								><font-awesome-icon
									class="social-icon"
									:icon="['fab', 'linkedin']"
									size="lg"
							/></a>
						</li>
					</ul>
				</div>
				<div class="col-2">
					<ul>
						<router-link class="link link-light" to="#">Home</router-link>
						<router-link class="link link-light" to="#">Blog</router-link>
						<router-link class="link link-light" to="#">New Post</router-link>
						<router-link class="link link-light" to="#"
							>Login/Register</router-link
						>
					</ul>
				</div>
			</div>
			<div class="section__right link-light">
				<p>Copyright 2021 All Rights Reserved</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
	background: #303030;
	padding: 3rem;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		@media only screen and (min-width: 900px) {
			flex-direction: row;
			justify-content: space-around;
		}

		.section__left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;

			@media only screen and (min-width: 900px) {
				flex-direction: row;
				gap: 8rem;
			}

			.col-1 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				ul {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 2.5rem;
					list-style: none;
					margin-top: 1rem;

					.social-icon {
						color: #fff;
					}
				}
			}

			.col-2 {
				ul {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 10px;
					margin-top: 1rem;

					@media only screen and (min-width: 900px) {
						align-items: flex-start;
					}
				}
			}
		}

		.section__right {
			p {
				text-align: center;
			}
		}
	}
}
</style>
