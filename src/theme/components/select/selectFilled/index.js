import selectOutlinedColors from '../selectOutlined/selectOutlinedColors';
import selectOutlinedLabelColors from '../selectOutlined/selectOutlinedLabelColors';
import selectFilledLabel from './selectFilledLabel';
const selectFilled = {
  base: {
    select: {
      bg: 'bg-gray-200',
      pt: 'pt-0'
    },
    label: selectFilledLabel
  },
  sizes: {
    small: {
      container: {
        height: 'h-10'
      },
      select: {
        fontSize: 'text-sm',
        px: 'px-3',
        py: 'py-2.5',
        borderRadius: 'rounded-[7px]'
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: 'leading-[3.75]'
          },
          open: {
            lineHeight: 'leading-tight'
          },
          withValue: {
            lineHeight: 'leading-tight'
          }
        }
      }
    },
    normal: {
      container: {
        height: 'h-12'
      },
      select: {
        fontSize: 'text-lg',
        px: 'px-3',
        py: 'py-3',
        borderRadius: 'rounded-[7px]'
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: 'leading-[3.8]',
            fontSize: 'text-base'
          },
          open: {
            lineHeight: 'leading-tight',
            fontSize: 'text-sm'
          },
          withValue: {
            lineHeight: 'leading-tight'
          }
        }
      }
    },
    large: {
      container: {
        height: 'h-16'
      },
      select: {
        px: 'px-3',

        border: 'border-0 border-b',
        borderRadius: 'rounded-t-[7px]'
      },
      label: {
        initial: {},
        states: {
          close: {
            label: {
              lineHeight: 'leading-[4.6]',
              pl: 'pl-2',
              fontSize: 'text-base'
            }
          },
          open: {
            lineHeight: 'leading-tight',
            fontSize: 'text-sm'
          },
          withValue: {
            lineHeight: 'leading-tight',
            fontSize: 'text-sm'
          }
        }
      }
    }
  },
  colors: {
    select: selectOutlinedColors,
    label: selectOutlinedLabelColors
  },
  states: {
    close: {
      select: {
        borderWidth: 'border-0'
      },
      label: {
        fontSize: 'text-sm',
        disabled: 'peer-disabled:text-blue-grey-400',
        before: {
          bt: 'before:border-t-transparent',
          bl: 'before:border-l-transparent'
        },
        after: {
          bt: 'after:border-t-transparent',
          br: 'after:border-r-transparent'
        }
      }
    },
    open: {
      select: {
        borderWidth: 'border-b-2',
        borderColor: 'border-t-transparent'
      },
      label: {
        fontSize: 'text-[11px]',
        disabled: 'peer-disabled:text-transparent',
        before: {
          bt: 'before:border-t-0',
          bl: 'before:border-l-0'
        },
        after: {
          bt: 'after:border-t-0',
          br: 'after:border-r-0'
        }
      }
    },
    withValue: {
      select: {
        borderWidth: 'border',
        borderColor: 'border-t-transparent'
      },
      label: {
        fontSize: 'text-[11px]',
        disabled: 'peer-disabled:text-transparent',
        before: {
          bt: 'before:border-t-0',
          bl: 'before:border-l-0'
        },
        after: {
          bt: 'after:border-t-0',
          br: 'after:border-r-0'
        }
      }
    }
  },
  error: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: 'border-red-500'
        },
        open: {
          borderColor: 'border-red-500',
          borderTopColor: 'border-t-transparent'
        },
        withValue: {
          borderColor: 'border-red-500',
          borderTopColor: 'border-t-transparent'
        }
      }
    },
    label: {
      initial: {},
      states: {
        close: {
          color: 'text-red-500',
          before: 'before:border-red-500',
          after: 'after:border-red-500'
        },
        open: {
          color: 'text-red-500',
          before: 'before:border-red-500',
          after: 'after:border-red-500'
        },
        withValue: {
          color: 'text-red-500',
          before: 'before:border-red-500',
          after: 'after:border-red-500'
        }
      }
    }
  },
  success: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: 'border-green-500'
        },
        open: {
          borderColor: 'border-green-500',
          borderTopColor: 'border-t-transparent'
        },
        withValue: {
          borderColor: 'border-green-500',
          borderTopColor: 'border-t-transparent'
        }
      }
    },
    label: {
      initial: {},
      states: {
        close: {
          color: 'text-green-500',
          before: 'before:border-green-500',
          after: 'after:border-green-500'
        },
        open: {
          color: 'text-green-500',
          before: 'before:border-green-500',
          after: 'after:border-green-500'
        },
        withValue: {
          color: 'text-green-500',
          before: 'before:border-green-500',
          after: 'after:border-green-500'
        }
      }
    }
  }
};

export default selectFilled;
