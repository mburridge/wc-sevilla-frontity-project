import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      {/*<Head>
        <title>Test</title>
      </Head>*/}
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
          }
          html {
            font-family: sans-serif;
          }
        `}
      />
      <Header isPostType={data.isPostType}>
        <h1>
          WordCamp<Logo>💃🏼</Logo>Sevilla
        </h1>
        <Loc>
          <strong>Current path:</strong> {state.router.link}
        </Loc>
        {state.theme.isMenuOpen ? (
          <>
            <Button onClick={actions.theme.closeMenu}>Close</Button>
            <Menu>
              <Link href="/">Home</Link>
              <Link href="/page/2">Page 2</Link>
              <Link href="/informacion/faq/">FAQ</Link>
            </Menu>
          </>
        ) : (
          <Button onClick={actions.theme.openMenu}>Menu</Button>
        )}
      </Header>
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.isPostType
      ? "background-color: aliceblue"
      : "background-color: mintcream"};

  h1 {
    font-size: 2em;
    text-align: center;
    color: #888;
    margin: 16px 0 0;
    text-shadow: 2px 2px 3px #ccc;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 16px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 16px;

  img {
    max-width: 100%;
  }
`;

const Logo = styled.span`
  font-size: 3em;
  margin: 24px;
  text-shadow: 2px 2px 4px #aaa;
`;

const Loc = styled.p`
  font-size: 0.9em;
  color: #888;
`;

const Button = styled.button`
  width: 92px;
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  color: #525252;
  font-weight: bold;
`;
