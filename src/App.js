import ReplayParser from './containers/ReplayParser';
import { AppWraper, Container } from './styles/app.styled';

export default function App() {
  return (
    <AppWraper>
      <Container>
        <ReplayParser />
      </Container>
    </AppWraper>
  )
}

