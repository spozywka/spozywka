import { Button, Select } from 'antd';
import { stringify } from 'qs';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../../components/Card';
import { paths } from '../../../constants';
import { desktopBreakpoint, lightGrey } from '../../../styles';
import { OfferListSearchParams } from '../../../types/offerList';

const { Option } = Select;

const Wrapper = styled(Card)`
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

const Label = styled.div`
  color: ${lightGrey};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  padding: 20px 0 0 0;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 0 0 0 40px;
  }
`;

interface Props {
  params: OfferListSearchParams;
  cities: string[];
  categories: string[];
  onChange(params: OfferListSearchParams): void;
}

export function SearchBox(props: Props) {
  const { cities, categories } = props;
  const { city, category, who } = props.params;

  return (
    <Wrapper>
      <Field>
        <Label>You are:</Label>

        <Select
          value={who}
          onChange={(value: 'consumer' | 'vendor') =>
            props.onChange({ who: value, city, category })
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
          value={city}
          onChange={(value: string) => props.onChange({ who, city: value, category })}
        >
          {cities.map((c) => (
            <Option value={c} key={c}>
              {c}
            </Option>
          ))}
        </Select>
      </Field>

      <Spacer />

      <Field>
        <Label>Category:</Label>

        <Select
          value={category}
          onChange={(value: string) => props.onChange({ who, city, category: value })}
        >
          {categories.map((c) => (
            <Option value={c} key={c}>
              {c}
            </Option>
          ))}
        </Select>
      </Field>

      <ButtonWrapper>
        <Link
          to={{
            pathname: paths.offerList,
            search: stringify({
              city: city,
              who: who,
              category: category,
            }),
          }}
        >
          <Button style={{ width: '100%' }} type="primary" size="large">
            {who === 'consumer' ? 'Search' : 'Offer'}
          </Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
}
