import { Component, ReactNode } from 'react';
import { Container } from '@mui/material';
import { Layout } from 'src/components/index';
import SOMETHING_WENT_WRONG from 'src/assets/500.jpg';

interface Props {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<Props> {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error: any) {
    return {
      error: true,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error)
      return (
        <Layout>
          <Container
            maxWidth="sm"
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={SOMETHING_WENT_WRONG}
              alt="something_went_wrong"
              height={450}
              width={1000}
            />
          </Container>
        </Layout>
      );
    return this.props.children;
  }
}
