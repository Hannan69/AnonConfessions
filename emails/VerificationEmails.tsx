import {
    Html,
    Head,
    Body,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from '@react-email/components';
  
  interface VerificationEmailProps {
    username: string;
    otp: string;
  }
  
  export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Verification Code</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Here&apos;s your verification code: {otp}</Preview>
        <Body style={{ fontFamily: 'Roboto, Verdana, sans-serif', padding: '20px' }}>
          <Section>
            <Row>
              <Heading as="h2">Hello {username},</Heading>
            </Row>
            <Row>
              <Text>Thank you for registering. Please use the following verification code to complete your registration:</Text>
            </Row>
            <Row>
              <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{otp}</Text>
            </Row>
            <Row>
              <Text>If you did not request this code, please ignore this email.</Text>
            </Row>
            <Row>
              <Button
                href={`localhost:3000/verify/${username}`}
                style={{
                  backgroundColor: '#007bff',
                  color: '#ffffff',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  borderRadius: '5px',
                }}
              >
                Verify here
              </Button>
            </Row>
          </Section>
        </Body>
      </Html>
    );
  }
  