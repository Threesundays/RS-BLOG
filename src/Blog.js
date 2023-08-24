import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
text-align: center;
`;

const Header = () => {
	return (
		<div>
			<h1>Header</h1>
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			<h1>Footer</h1>
		</div>
	);
};

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страницы</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
};
