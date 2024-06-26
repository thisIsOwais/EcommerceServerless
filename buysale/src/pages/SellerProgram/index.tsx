/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ColDiv, RowDiv } from "../../components/Misc/misc.styled";
import { Lbl } from "../../components/Labels";
import { AppCSS, Spacer, TapButton, TxtInput } from "../../components";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { useEffect, useState } from "react";

import { useAppSelector } from "../../state/hooks";
import { Container } from "../../utils/globalstyled";
import { Checkbox, FormControlLabel } from "@mui/material";
import { JoinSellerProgramAPI } from "../../api/seller-api";
import ProductView from "./productView";

interface SellerProgramProps {}

const SellerProgramPage: React.FC<SellerProgramProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [swiftCode, setSwiftCode] = useState("");

  const [regularPayout, setRegularPayout] = useState(true);

  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  const profile = useAppSelector((state) => state.userReducer.userProfile);

  const onTapJoinProgram = async () => {
    const { data, msg } = await JoinSellerProgramAPI(profile.token, {
      firstName,
      lastName,
      phoneNumber,
      bankAccountNumber,
      swiftCode,
      paymentType: regularPayout ? "regular" : "weekly",
      address: {
        addressLine1,
        addressLine2,
        city,
        postCode,
        country,
      },
    });
    if (data) {
      console.log(JSON.stringify(data));
    } else {
      console.log(`Error: ${msg}`);
    }
  };

  const onboardingSellerProgram = () => {
    return (
      <ColDiv>
        <Spacer size={1} direction="col" />
        <RowDiv
          style={{
            width: "80%",
            display: "row",
            maxWidth: "900px",

            justifyContent: "space-around",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <RowDiv>
            <Lbl title={`Join as Seller`} size={32} bold={600} />
          </RowDiv>
        </RowDiv>
        <Spacer size={1} direction="col" />
        {/* Selected Action row */}
        <RowDiv
          style={{
            width: "80%",
            maxWidth: "900px",
            display: "row",
            justifyContent: "space-around",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ColDiv
            style={{
              width: "60%",
              marginRight: "100px",
            }}
          >
            <Spacer size={1} direction="col" />

            <ColDiv>
              <Lbl title="First Name" color={AppCSS.GRAY_DARK} size={13} />
              <TxtInput
                value={firstName}
                placeholder="First Name"
                onChange={setFirstName}
              />
            </ColDiv>
            <Spacer size={1} direction="row" />
            <ColDiv>
              <Lbl title="Last Name" color={AppCSS.GRAY_DARK} size={13} />
              <TxtInput
                value={lastName}
                placeholder="Last Name"
                onChange={setLastName}
              />
            </ColDiv>

            <ColDiv>
              <Lbl title="Phone Number" color={AppCSS.GRAY_DARK} size={13} />

              <TxtInput
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={setPhoneNumber}
              />
            </ColDiv>
            <Spacer size={2} direction="col" />

            <ColDiv>
              <Lbl
                title="Bank Account Number"
                color={AppCSS.GRAY_DARK}
                size={13}
              />
              <TxtInput
                value={bankAccountNumber}
                placeholder="Bank Account Number"
                onChange={setBankAccountNumber}
              />
            </ColDiv>

            <ColDiv>
              <Lbl
                title="Confirmed Account Number"
                color={AppCSS.GRAY_DARK}
                size={13}
              />

              <TxtInput
                value={confirmAccountNumber}
                placeholder="Confirm Account Number"
                onChange={setConfirmAccountNumber}
              />
            </ColDiv>
            <ColDiv>
              <Lbl title="Swift Code" color={AppCSS.GRAY_DARK} size={13} />

              <TxtInput
                value={swiftCode}
                placeholder="Swift Code"
                onChange={setSwiftCode}
              />
            </ColDiv>

            <RowDiv
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            ></RowDiv>

            <Spacer size={2} direction="col" />
            <TapButton
              title="Join Program"
              onTap={() => onTapJoinProgram()}
              bgColor={AppCSS.RED}
              width={240}
              height={38}
            />
          </ColDiv>
          <ColDiv
            style={{
              width: "60%",
              marginRight: "50px",
              alignItems: "center",
            }}
          >
            <ColDiv
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RowDiv
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <Lbl
                  title="Seller Address"
                  color={AppCSS.GRAY_DARK}
                  size={13}
                />
              </RowDiv>
              <ColDiv>
                <TxtInput
                  value={addressLine1}
                  placeholder="Address Line1"
                  onChange={setAddressLine1}
                />
              </ColDiv>
              <RowDiv
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <Lbl
                  title="Additional Address"
                  color={AppCSS.GRAY_DARK}
                  size={13}
                />
              </RowDiv>
              <ColDiv>
                <TxtInput
                  value={addressLine2}
                  placeholder="Address Line2"
                  onChange={setAddressLine2}
                />
              </ColDiv>
              <Spacer size={1} direction="col" />
            </ColDiv>
            <Spacer size={1} direction="col" />
            <ColDiv>
              <Lbl title="City Name" color={AppCSS.GRAY_DARK} size={13} />

              <TxtInput
                value={city}
                placeholder="City Name"
                onChange={setCity}
              />
            </ColDiv>
            <Spacer size={1} direction="row" />
            <ColDiv>
              <Lbl title="Post Code" color={AppCSS.GRAY_DARK} size={13} />

              <TxtInput
                value={postCode}
                placeholder="Post Code"
                onChange={setPostCode}
              />
            </ColDiv>
            <ColDiv>
              <Lbl title="Country" color={AppCSS.GRAY_DARK} size={13} />

              <TxtInput
                value={country}
                placeholder="Country"
                onChange={setCountry}
              />
            </ColDiv>

            <Spacer size={1} direction="col" />
            <RowDiv
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                margin: 0,
              }}
            >
              <FormControlLabel
                style={{
                  color: "#979797",
                }}
                control={
                  <Checkbox
                    onChange={(e) => setRegularPayout(e.target.checked)}
                    sx={{
                      color: "#dc2342",
                      "&.Mui-checked": {
                        color: "#dc2342",
                      },
                    }}
                    checked={regularPayout}
                  />
                }
                label=""
              />
              <p
                style={{
                  textAlign: "left",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  fontSize: "0.8rem",
                }}
              >
                Regular Payout
              </p>
            </RowDiv>
          </ColDiv>
        </RowDiv>
      </ColDiv>
    );
  };

  if (profile.userType === "BUYER") {
    return (
      <Container
        style={{
          width: "80%",
          paddingTop: 20,
        }}
      >
        {onboardingSellerProgram()}
      </Container>
    );
  } else {
    return (
      <Container
        style={{
          width: "80%",
          paddingTop: 20,
        }}
      >
        <ProductView />
      </Container>
    );
  }
};

export default SellerProgramPage;
