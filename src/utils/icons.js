import { ReactComponent as Axios } from '../assets/icons/axios.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as CSS } from '../assets/icons/css3-alt.svg';
import { ReactComponent as MUI } from '../assets/icons/MaterialUI.svg';
import { ReactComponent as JavaScript } from '../assets/icons/square-js.svg';
import { ReactComponent as HTML } from '../assets/icons/html5.svg';
import { ReactComponent as Bootstrap } from '../assets/icons/bootstrap.svg';
import { ReactComponent as Sass } from '../assets/icons/sass.svg';
import { ReactComponent as Git } from '../assets/icons/git-alt.svg';
import { ReactComponent as Redux } from '../assets/icons/redux.svg';
import { ReactComponent as Tailwind } from '../assets/icons/tailwind-css.svg';
import { ReactComponent as RestApi } from '../assets/icons/api-svgrepo-com.svg';
import { ReactComponent as Express } from '../assets/icons/Express.svg';
import { ReactComponent as Nodejs } from '../assets/icons/nodejs-logo-svgrepo-com.svg';
import { ReactComponent as MongoDB } from '../assets/icons/mongodb-svgrepo-com.svg';
import { ReactComponent as TypeScript } from '../assets/icons/typescript-svgrepo-com.svg';
import { ReactComponent as Vite } from '../assets/icons/vite-svgrepo-com.svg';


let height = '40px';
let width = '50px';
export const icons = {
	html: (
		<HTML
			width={width}
			height={height}
		/>
	),
	css: (
		<CSS
			width={width}
			height={height}
		/>
	),
	javascript: (
		<JavaScript
			width={width}
			height={height}
		/>
	),
	typescript: (
		<TypeScript
			width={width}
			height={height}
		/>
	),
	vite: (
		<Vite
			width={width}
			height={height}
		/>
	),
	react: (
		<ReactIcon
			width={width}
			height={height}
		/>
	),
	mui: (
		<MUI
			width={width}
			height={height}
			transform="scale(0.8)"
		/>
	),
	axios: (
		<Axios
			width={width}
			height={height}
			transform="scale(4.5)"
		/>
	),
	bootstrap: (
		<Bootstrap
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	sass: (
		<Sass
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	git: (
		<Git
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	redux: (
		<Redux
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	tailwind: (
		<Tailwind
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	express: (
		<Express
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	nodejs: (
		<Nodejs
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	restapi: (
		<RestApi
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
	mongodb: (
		<MongoDB
			width={width}
			height={height}
			transform="scale(0.9)"
		/>
	),
};
