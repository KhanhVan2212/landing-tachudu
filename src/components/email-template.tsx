import * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from "@react-email/components";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  message,
}) => {
  const baseUrl =
    process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";

  return (
    <Html>
      <Head />
      <Preview>Liên hệ mới từ khách hàng: {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/images/logo.png`}
              width="300"
              height="100"
              alt="Tachudu Logo"
              style={logo}
            />
          </Section>
          <Heading style={h1}>Liên hệ đặt Tour</Heading>
          <Text style={heroText}>
            Bạn nhận được một yêu cầu liên hệ mới từ website. Dưới đây là thông
            tin chi tiết:
          </Text>

          <Section style={box}>
            <Text style={paragraph}>
              <strong>Họ và tên:</strong> {fullName}
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Số điện thoại:</strong>{" "}
              <a href={`tel:${phone}`} style={link}>
                {phone}
              </a>
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Nội dung tin nhắn:</strong>
            </Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Text style={footer}>
            Email này được gửi tự động từ hệ thống website của Tachudu.
            <br />
            Nếu cần hỗ trợ, vui lòng liên hệ đội ngũ kỹ thuật.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  maxWidth: "600px",
};

const logoContainer = {
  padding: "20px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #eaeaea",
};

const logo = {
  margin: "0 auto",
  objectFit: "contain" as const,
};

const h1 = {
  color: "#DC2626", // Red 600
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0",
  textTransform: "uppercase" as const,
};

const heroText = {
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "center" as const,
  color: "#374151",
  padding: "0 40px",
  marginBottom: "30px",
};

const box = {
  padding: "24px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  border: "1px solid #fed7aa", // Orange 200
  margin: "0 20px",
  boxShadow: "0 2px 4px rgba(249, 115, 22, 0.1)", // Orange tint shadow
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#374151",
  margin: "10px 0",
};

const hr = {
  borderColor: "#fdba74", // Orange 300
  margin: "10px 0",
};

const link = {
  color: "#ea580c", // Orange 600
  textDecoration: "none",
  fontWeight: "bold",
};

const messageBox = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#374151",
  backgroundColor: "#fff7ed", // Orange 50
  padding: "16px",
  borderRadius: "4px",
  marginTop: "10px",
  borderLeft: "4px solid #ea580c", // Orange 600
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "40px",
  textAlign: "center" as const,
};
