# on-body

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

  Callback when `document.body` exists.

## Installation

    $ component install segmentio/on-body

## API

### onBody(Function)

  Will call your function with `fn(document.body)` when the `<body>` element has been created. This way you can easily append things to the body even if the Javascript was added in the `<head>`.

## License

  MIT
