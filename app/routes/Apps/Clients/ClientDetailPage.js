import React from "react";
import {
  Container,
  Badge,
  Row,
  Col,
  FormGroup,
  Label,
  Accordion
} from "./../../../components";
import GluuFormDetailRow from "../Gluu/GluuFormDetailRow";
function ClientDetailPage({ row }) {
  return (
    <React.Fragment>
      {/* START Content */}
      <Container style={{ backgroundColor: "#F5F5F5" }}>
        <Row>
          <Col sm={6}>
            <GluuFormDetailRow label="Client Id" value={row.inum} />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow
              label="Client Secret"
              value={row.clientSecret ? row.clientSecret : "-"}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <GluuFormDetailRow
              label="Name"
              value={row.displayName ? row.displayName : "-"}
            />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow label="Description" value={row.description} />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <GluuFormDetailRow
              label="Subject Type"
              value={row.subjectType ? row.subjectType : "-"}
            />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow
              label="Application Type"
              value={row.applicationType}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={6}>Trusted Client:</Label>
              <Label sm={6}>
                {row.trustedClient ? (
                  <Badge color="primary">Yes</Badge>
                ) : (
                  <Badge color="danger">No</Badge>
                )}
              </Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={6}>Status:</Label>
              <Label sm={6}>
                {!row.disabled ? (
                  <Badge color="primary">Enabled</Badge>
                ) : (
                  <Badge color="danger">Disabled</Badge>
                )}
              </Label>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Accordion className="mb-2">
                <Accordion.Header className="h6">
                  Scopes
                  <Accordion.Indicator className="ml-auto" />
                </Accordion.Header>
                <Accordion.Body>
                  <Label sm={8}>
                    {row.scopes &&
                      row.scopes.map((item, key) => (
                        <Badge key={key} color="primary">
                          {item}
                        </Badge>
                      ))}
                  </Label>
                </Accordion.Body>
              </Accordion>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={4}>Grant types:</Label>
              <Label sm={8}>
                {row.grantTypes &&
                  row.grantTypes.map((item, key) => (
                    <Badge key={key} color="primary">
                      {item}
                    </Badge>
                  ))}
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={4}>Response types:</Label>
              <Label sm={8}>
                {row.responseTypes &&
                  row.responseTypes.map((item, key) => (
                    <Badge key={key} color="primary">
                      {item}
                    </Badge>
                  ))}
              </Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={4}>Login uris:</Label>
              <Label sm={8}>
                {row.redirectUris &&
                  row.redirectUris.map((item, key) => (
                    <Badge key={key} color="primary">
                      {item}
                    </Badge>
                  ))}
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={4}>Logout Redirect Uris: </Label>
              <Label sm={8}>
                {row.postLogoutRedirectUris &&
                  row.postLogoutRedirectUris.map((item, key) => (
                    <Badge key={key} color="primary">
                      {item}
                    </Badge>
                  ))}
              </Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={6}>
                Authentication method for the Token Endpoint:
              </Label>
              <Label sm={6}>
                {row.authenticationMethod && (
                  <Badge color="primary">{row.authenticationMethod}</Badge>
                )}
              </Label>
            </FormGroup>
          </Col>
        </Row>
        {/* END Content */}
      </Container>
    </React.Fragment>
  );
}

export default ClientDetailPage;
