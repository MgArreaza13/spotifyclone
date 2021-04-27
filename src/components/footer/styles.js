import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  width: 98%;
  background-color: #282828;
  padding: 20px;
`;
export const FooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  width: 300px;
`;

export const SongInfo = styled.div`
  > h4 {
    margin-bottom: 5px;
  }
  > p {
    font-size: 12px;
  }
`;
export const AlbungLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

export const FooterCenter = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;

  > .footer__green {
    color: #1ed15e;
    &:hover {
      transition: transform 0.2s ease-in-out;
      transform: scale(1.2) !important;
    }
  }

  > .footer__icon:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const FooterRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  > * .MuiSlider-root  {
    color: green !important;
  }
`;
