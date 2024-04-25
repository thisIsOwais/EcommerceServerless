import * as AWS from "aws-sdk";

export const SendEmailUsingSES = async (to: string, message: string) => {
  var params = {
    Destination: {
      /* required */
      CcAddresses: [
        "owaismohd@gmail.com",
        /* more items */
      ],
      ToAddresses: [
        to,
        /* more items */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: message,
        },
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Test email",
      },
    },
    Source: "codergogoi@gmail.com" /* required */,
    ReplyToAddresses: [
      "codergogoi@gmail.com",
      /* more items */
    ],
  };

  const sesService = new AWS.SES({ apiVersion: "2010-12-01" });

  await sesService.sendEmail(params).promise();
};


// import sendgrid from "@sendgrid/mail";

// const SEND_GRID_API_KEY = "XXXX";
// const FROM_EMAIL = "support@oilStore.com";
// const TMP_ORDER_CONFIRMATION = "d-b6e0cxxxxxxxxxxxxxxxxdf3a9";

// sendgrid.setApiKey(SEND_GRID_API_KEY);

// export interface EmailTemplate {
//   to: string;
//   from: string;
//   templateId: string;
//   dynamic_template_data: Record<string, unknown>;
// }

// export const ORDER_CONFIRMATION = (
//   email: string,
//   firstName: string,
//   orderNumber: string
// ): EmailTemplate => {
//   return {
//     from: FROM_EMAIL,
//     to: email,
//     dynamic_template_data: {
//       name: firstName,
//       order_number: orderNumber,
//     },
//     templateId: TMP_ORDER_CONFIRMATION,
//   };
// };

// export const SendEmail = async (template: EmailTemplate) => {
//   try {
//     await sendgrid.send(template);
//     return true;
//   } catch (err) {
//     console.log("Error wile sending email", JSON.stringify(err));
//     return false;
//   }
// };

