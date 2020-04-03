import { Select, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { lightGrey, desktopBreakpoint } from '../../../styles';

const { Option } = Select;

const Wrapper = styled.div`
  box-shadow: 0px 6px 12px -2px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 20px 40px;
  display: flex;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 20px 1fr 20px 1fr 1fr;

  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 1fr 21px 1fr 21px 1fr 1.3fr;
    grid-template-rows: 1fr;
  }
`;

const Field = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  flex: none;
  width: 100%;
  height: 20px;

  @media (min-width: ${desktopBreakpoint}) {
    flex: none;
    width: 1px;
    height: 60px;
    background-color: ${lightGrey};
    margin: 0 10px;
  }
`;

const Label = styled.span`
  color: ${lightGrey};
`;

const ButtonWrapper = styled.div`
  padding: 20px 0 0 0;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 0 0 0 40px;
  }
`;

interface Props {
  who: 'consumer' | 'vendor';
  city: string;
  cities: string[];
  category: string;
  categories: string[];
  onChange(who: Props['who'], city: Props['city'], category: Props['category']): void;
}

export function SearchBox(props: Props) {
  const { cities, categories } = props;

  return (
    <Wrapper>
      <Field>
        <Label>You are:</Label>

        <Select
          value={props.who}
          onChange={(value: 'consumer' | 'vendor') =>
            props.onChange(value, props.city, props.category)
          }
        >
          <Option value="consumer">Consumer</Option>
          <Option value="vendor">Vendor</Option>
        </Select>
      </Field>

      <Spacer />

      <Field>
        <Label>Your city:</Label>

        <Select
          value={props.city}
          onChange={(value: string) => props.onChange(props.who, value, props.category)}
        >
          {cities.map((city) => (
            <Option value={city} key={city}>
              {city}
            </Option>
          ))}
        </Select>
      </Field>

      <Spacer />

      <Field>
        <Label>Category:</Label>

        <Select
          value={props.category}
          onChange={(value: string) => props.onChange(props.who, props.city, value)}
        >
          {categories.map((category) => (
            <Option value={category} key={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Field>

      <ButtonWrapper>
        <Button style={{ width: '100%' }} type="primary" size="large">
          {props.who === 'consumer' ? 'Search' : 'Offer'}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
