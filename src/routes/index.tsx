import { Icon } from "@/components/atoms";
import {
	GithubIcon,
	LinkedInIcon,
	MailIcon,
	ResumeIcon,
	SpotifyIcon,
} from "@/components/icons";
import { Bite } from "@/components/molecules/Bite";
import { HomeLine } from "@/components/molecules/HomeLine";
import { Arrow, Content, Icons, Panel } from "@/styles/routes/home.styled";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const biteRef = useRef<HTMLHeadingElement>(null);

	const scrollToBites = () => {
		biteRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Content>
			<Panel>
				<h1>
					Hey, <span>I am Michael!</span>
				</h1>
				<Icons>
					<Icon
						label="GitHub Profile"
						link="https://github.com/michaelssavage"
						icon={<GithubIcon />}
						isExternal
					/>
					<Icon
						label="LinkedIn Profile"
						link="https://www.linkedin.com/in/michaelssavage"
						icon={<LinkedInIcon />}
						isExternal
					/>
					<Icon
						label="My Email"
						link="mailto:michaelsavage940@gmail.com"
						icon={<MailIcon />}
						isExternal
					/>
					<Icon
						label="Spotify Profile"
						link="https://open.spotify.com/user/1156402021"
						icon={<SpotifyIcon />}
						isExternal
					/>
					<Icon
						label="Download My CV"
						link="https://drive.google.com/file/d/1BG6IDJEETr9BROh43ogFKctbXX-LehiG/view?usp=sharing"
						icon={<ResumeIcon />}
						isExternal
					/>
				</Icons>
				<HomeLine />
				<Arrow onClick={scrollToBites} />
			</Panel>

			<Bite biteRef={biteRef} />
		</Content>
	);
}
