<template>
	<header>
		<nav class="container">
			<div class="brand">
				<router-link class="logo__title" :to="{ name: 'Home' }"
					>Blog Site</router-link
				>
			</div>
			<div class="nav-links" v-if="!mobile">
				<ul>
					<router-link class="link" to="#">Home</router-link>
					<router-link class="link" to="#">Blog</router-link>
					<router-link class="link" to="#">New Post</router-link>
					<router-link class="link" to="#">Login/Register</router-link>
				</ul>
			</div>
			<font-awesome-icon
				:icon="['fas', 'bars']"
				size="lg"
				v-if="mobile"
				@click="mobileNavToggle"
				style="cursor: pointer;"
			/>
		</nav>
		<transition name="mobile-nav">
			<ul class="mobile-nav" v-show="mobileNavOpen">
				<router-link class="link" to="#">Home</router-link>
				<router-link class="link" to="#">Blog</router-link>
				<router-link class="link" to="#">New Post</router-link>
				<router-link class="link" to="#">Login/Register</router-link>
			</ul>
		</transition>
	</header>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
			mobile: false,
			mobileNavOpen: false,
			windowSize: null,
		};
	},
	methods: {
		mobileNavToggle() {
			this.mobileNavOpen = !this.mobileNavOpen;
		},
		checkScreen() {
			this.windowSize = window.innerWidth;

			if (this.windowSize <= 768) {
				this.mobile = true;
				return;
			}
			this.mobile = false;
			this.moobileNavOpen = false;
			return;
		},
	},
	created() {
		window.addEventListener("resize", this.checkScreen);
		this.checkScreen();
	},
};
</script>

<style lang="scss" scoped>
header {
	background: #fff;
	padding: 0 25px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	z-index: 999;

	.container {
		justify-content: space-between;
		align-items: center;
	}
	.link {
		font-weight: 500;
		padding: 0 8px;
		transition: 0.3s color ease;

		&:hover {
			color: #1eb8b8;
		}
	}

	nav {
		display: flex;
		padding: 25px 0;

		.brand {
			display: flex;
			align-items: center;
		}

		.nav-links {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;

			ul {
				.link:not(:last-child) {
					margin-right: 32px;
				}
			}
		}
	}

	.menu-icon {
		cursor: pointer;
		position: absolute;
		top: 32px;
		right: 25px;
		height: 25px;
		width: auto;
	}

	.mobile-nav {
		padding: 20px;
		width: 70%;
		max-width: 250px;
		display: flex;
		flex-direction: column;
		position: fixed;
		height: 100%;
		background: #303030;
		top: 0;
		left: 0;

		.link {
			color: #fff;
			padding: 15px;
		}
	}
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
	transition: all 1s ease;
}

.mobile-nav-enter {
	transform: translateX(-250px);
}

.mobile-nav-enter-to {
	transform: translateX(0);
}

.mobile-nav-leave-to {
	transform: translateX(-250px);
}
</style>
