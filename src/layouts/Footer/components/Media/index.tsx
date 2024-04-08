import SocialMediaBox from "../../../../components/SocialBox";
import * as S from "../../style";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";

const Media = () => {
  return (
    <S.SocialMediaContainer>
      <div>
        <S.Title>E-mail para contato</S.Title>
        <S.Text>slucasdiniz@gmail.com</S.Text>
      </div>
      <div>
        <S.Title>Adicione nas redes</S.Title>
        <S.LinksContainer>
          <S.MediaContainer>
            <SocialMediaBox url="https://www.linkedin.com/in/lucas-diniz-sousa/">
              <Linkedin />
            </SocialMediaBox>
            <div>/lucas-diniz-sousa</div>
          </S.MediaContainer>
          <S.MediaContainer>
            <SocialMediaBox url="https://github.com/LucasDinizDev/">
              <GitHub />
            </SocialMediaBox>
            <div>/LucasDinizDev</div>
          </S.MediaContainer>
          {/* <S.MediaContainer>
            <SocialMediaBox url="https://www.instagram.com/lucasdiniz.exe/">
              <Instagram />
            </SocialMediaBox>
            <div>/lucasdiniz.exe</div>
          </S.MediaContainer> */}
        </S.LinksContainer>
      </div>
    </S.SocialMediaContainer>
  );
};

export default Media;
