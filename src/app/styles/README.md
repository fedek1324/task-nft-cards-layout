# Breakpoint Mixins

This project uses a mobile-first approach with SCSS mixins for responsive design.

## Breakpoints

- **Mobile**: 0-1023px (base styles, no mixin needed)
- **Tablet**: 1024-1439px
- **Desktop**: 1440-1919px
- **Desktop2**: 1920-2559px
- **2K**: 2560-3839px
- **4K**: 3840px+

## Usage

Import the mixins file at the top of your `.module.scss` file:

```scss
@import '@/app/styles/mixins';
```

### Example: Progressive Enhancement (Mobile-First)

```scss
// Base styles (mobile 0-1023px)
.element {
  font-size: 14px;
  padding: 10px;
}

// Tablet and up (1024px+)
@include tablet {
  .element {
    font-size: 16px;
    padding: 15px;
  }
}

// Desktop and up (1440px+)
@include desktop {
  .element {
    font-size: 18px;
    padding: 20px;
  }
}

// Desktop2 and up (1920px+)
@include desktop2 {
  .element {
    font-size: 20px;
  }
}

// 2K and up (2560px+)
@include resolution-2k {
  .element {
    font-size: 22px;
  }
}

// 4K and up (3840px+)
@include resolution-4k {
  .element {
    font-size: 24px;
  }
}
```

### Example: Specific Ranges

```scss
// Only tablet (1024-1439px)
@include tablet-only {
  .element {
    background: blue;
  }
}

// Only desktop (1440-1919px)
@include desktop-only {
  .element {
    background: green;
  }
}

// Only 2K (2560-3839px)
@include resolution-2k-only {
  .element {
    background: red;
  }
}
```

## Migration from max-width to min-width

### Old approach (max-width):
```scss
// Desktop (base)
.element {
  font-size: 18px;
}

// Tablet
@media (max-width: 1439px) {
  .element {
    font-size: 16px;
  }
}

// Mobile
@media (max-width: 1023px) {
  .element {
    font-size: 14px;
  }
}
```

### New approach (min-width):
```scss
// Mobile (base)
.element {
  font-size: 14px;
}

// Tablet and up
@include tablet {
  .element {
    font-size: 16px;
  }
}

// Desktop and up
@include desktop {
  .element {
    font-size: 18px;
  }
}
```

## Benefits

1. **Mobile-first**: Optimizes for mobile devices first
2. **Progressive enhancement**: Adds features as screen size increases
3. **DRY principle**: Reusable mixins reduce code duplication
4. **Consistency**: Ensures all breakpoints are used consistently across the project
5. **Maintainability**: Easy to update breakpoints in one place
