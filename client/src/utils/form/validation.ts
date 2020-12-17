import React from 'react';

interface NameCheckValidationHeader {
  (First: React.ReactChild, Second: React.ReactChild): React.ReactChild;
}

interface NameCheckValidationMessage {
  (
    Pass: React.ReactChild,
    NoChange: React.ReactChild,
    Fail: React.ReactChild,
    Default: React.ReactChild,
  ): React.ReactChild;
}

function validationPass(check: boolean, name: string, noChange: boolean): boolean {
  if (!check || !name || noChange) {
    return false;
  }

  if (check) {
    return true;
  }
  return false;
}

function validationFail(check: boolean, noChange: boolean): boolean {
  if (!check && noChange) {
    return false;
  }

  if (!check) {
    return true;
  }

  return false;
}

function nothingChange(check: boolean, name: string, noChange: boolean): boolean {
  if (check && !noChange && name) {
    return true;
  }
  return false;
}

function normalPass(check, noChange, name, colorCheck) {
  if (colorCheck && name && noChange) {
    return true;
  }

  if (!check) {
    return false;
  }

  if (!name) {
    return false;
  }

  if (name && noChange) {
    return false;
  }

  if (name && !noChange) {
    return true;
  }
}

export function nameCheckValidationHeader(
  check: boolean,
  noChange: boolean,
  name: string,
  colorCheck: boolean,
): NameCheckValidationHeader {
  return function nameChangeCheckColorValidation(First, Second) {
    if (normalPass(check, noChange, name, colorCheck)) {
      return First;
    }
    return Second;
  };
}

export function nameCheckValidationMessage(
  check: boolean,
  name: string,
  noChange: boolean,
): NameCheckValidationMessage {
  return function (Pass, Fail, NoChange, Default) {
    if (validationPass(check, name, noChange)) {
      return Pass;
    }

    if (validationFail(check, noChange)) {
      return Fail;
    }

    if (nothingChange(check, name, noChange)) {
      return NoChange;
    }

    return Default;
  };
}
