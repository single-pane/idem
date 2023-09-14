import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function BankingDropdown() {

  return (
        <Dropdown>
          <DropdownTrigger>
                <Button color="primary"> Banking </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="savings"> Savings </DropdownItem>
            <DropdownItem key="current"> Current Account </DropdownItem>
            <DropdownItem key="payments">Payments</DropdownItem>
            <DropdownItem key="transactions">Transactions</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger"> Delete file </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  );
};
