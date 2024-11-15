import styled from "styled-components";
import logo from "../assets/images/TODO.svg";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

export default function Header({ dark, setDark }) {
  const handleClick = () => setDark(!dark);

  return (
    <Wrapper>
      <Logo src={logo} alt="Todo Logo" />
      <Button onClick={handleClick}>
        <Icon src={dark ? iconSun : iconMoon} alt="Theme Toggle" dark={dark} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 40px;
  transition: transform 0.5s ease;
  transform: ${({ dark }) => (dark ? "rotate(360deg)" : "rotate(0deg)")};
`;

const Logo = styled.img`
  height: max;
  width: 163px;
  padding-top: 40px;
`;
