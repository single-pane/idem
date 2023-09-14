import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function LoanDropdown() {

  return (
        <Dropdown >
          <DropdownTrigger>
                <Button color="primary" >Loans</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" >
            <DropdownItem key="personalL">Personal Loan</DropdownItem>
            <DropdownItem key="homeL">Home Loan</DropdownItem>
            <DropdownItem key="vehicleL">Vehicle Loan</DropdownItem>
            <DropdownItem key="educationL">Education Loan</DropdownItem>
            <DropdownItem key="transferL" className="text-danger" color="danger">Transfer Loan</DropdownItem>
          </DropdownMenu>
        </Dropdown>
  );
};
