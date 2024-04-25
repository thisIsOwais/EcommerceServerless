import twilio from "twilio";

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const client = twilio(accountSid, authToken);

export const SendVerificationCode = async (
  code: number,
  toPhoneNumber: string
) => {
  const response = await client.messages.create({
    body: `Your verification code is ${code} it will expire within 30 minutes.`,
    from: "+13343397622",
    to: toPhoneNumber.trim(),
  });
  console.log(response);
  return response;
};
