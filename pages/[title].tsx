import type { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [
		{ params: { title: "hello" } },
		{ params: { title: "world" } },
		{ params: { title: "with space" } },
		{ params: { title: "Another One" } },
		{ params: { title: "with_underscore" } },
		{ params: { title: "Another_One_Underscore" } },
	];

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const time = new Date().toISOString();
	return {
		props: {
			title: params?.title,
			time,
		},
		revalidate: 5,
	};
};

interface Props {
	title: string;
	time: string;
}

const sample = ({ title, time }: Props) => {
	return (
		<div>
			{title}: {time}
		</div>
	);
};

export default sample;
