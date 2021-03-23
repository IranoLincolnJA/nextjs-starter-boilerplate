import * as S from './styles'

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
