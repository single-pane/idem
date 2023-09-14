import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function InvestmentDropdown() {

  return (
        <Dropdown>
          <DropdownTrigger>
                <Button color="primary">Investments</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="stocks">Stocks</DropdownItem>
            <DropdownItem key="options">Options</DropdownItem>
            <DropdownItem key="forex">Forex</DropdownItem>
            <DropdownItem key="customF">Basket Fund</DropdownItem>
            <DropdownItem key="indexF">Index Funds</DropdownItem>
            <DropdownItem key="mutualF">Mutual Fund</DropdownItem>
            <DropdownItem key="alternateF">Alternate Fund</DropdownItem>
            <DropdownItem key="hedgeF" className="text-danger" color="danger">Hedge Fund</DropdownItem>
          </DropdownMenu>
        </Dropdown>
  );
};
