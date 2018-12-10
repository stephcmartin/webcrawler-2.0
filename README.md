# webcrawler-2.0

Impement a web crawler that crawls the internet.


## Test Data
### Internet 1

```json
{
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
    },
    {
      "address":"http://foo.bar.com/p5",
      "links": []
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
    }
  ]
}
```

### Expected output:

```
Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p4", "http://foo.bar.com/p5", "http://foo.bar.com/p6"]

Skipped: ["http://foo.bar.com/p2", "http://foo.bar.com/p4","http://foo.bar.com/p1", "http://foo.bar.com/p5"]

Error: ["http://foo.bar.com/p3", "http://foo.bar.com/p7"]
```

### Internet 2

```json
{
  "pages": [
      {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p3"]
    },
    {
      "address":"http://foo.bar.com/p3",
      "links": ["http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5"]
    },
    {
    "address":"http://foo.bar.com/p5",
    "links": ["http://foo.bar.com/p1"]
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p1"]
    }
  ]
}
```

### Expected output:

```
Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4". "http://foo.bar.com/p5"]

Skipped: ["http://foo.bar.com/p1"]

Error: []
```
