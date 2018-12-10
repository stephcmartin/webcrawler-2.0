# webcrawler-2.0

Impement a web crawler that crawls the internet.

For the purposes of this project, we define the Internet as the test data in this document, and a web crawler as software that requests pages from the Internet, parses the content to extract all the links in the page, and visits the links to crawl those pages, to an infinite depth.


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
