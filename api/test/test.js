import { assert } from "chai";
import { describe, it } from "mocha";
import request from "supertest";

import app from "../src/index.js";

describe("GET /api/wiki-ideas/getArticles ", () => {
  it("should return all article", (done) => {
    request(app)
      .get("/api/wiki-ideas/getArticles")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        res._body.forEach((article) => {
          assert.isNotEmpty(res._body);
          assert.containsAllKeys(article, [
            "id",
            "title",
            "body",
            "like",
            "dislike",
            "CreatedAt",
            "UpdatedAt",
            "id_category",
            "id_thumbnail",
          ]);
        });
      })
      .then(
        () => done(),
        (err) => done(err)
      );
  });

  describe("GET /api/wiki-ideas/getArticles/id ", () => {
    it("should return article with id", (done) => {
      request(app)
        .get("/api/wiki-ideas/getArticle/1")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((res) => {
          assert.equal(res._body.id, 1);
          assert.isNotEmpty(res._body);
          assert.containsAllKeys(res._body, [
            "id",
            "title",
            "body",
            "like",
            "dislike",
            "CreatedAt",
            "UpdatedAt",
            "id_category",
            "id_thumbnail",
          ]);
        })
        .then(
          () => done(),
          (err) => done(err)
        );
    });
  });
});

describe("GET /api/wiki-ideas/getPagedArticles ", () => {
  it("should return all article", (done) => {
    request(app)
      .get("/api/wiki-ideas/getPagedArticles/?take=4&skip=3")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        assert.isNotEmpty(res._body);
        res.body.forEach((article) => {
          assert.containsAllKeys(article, [
            "id",
            "title",
            "body",
            "like",
            "dislike",
            "CreatedAt",
            "UpdatedAt",
            "id_category",
            "id_thumbnail",
          ]);
        });
      })
      .then(
        () => done(),
        (err) => done(err)
      );
  });
});

describe("GET /api/wiki-ideas/getCategories ", () => {
  it("should return all categories", (done) => {
    request(app)
      .get("/api/wiki-ideas/getCategories")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        res._body.forEach((category) => {
          assert.isNotEmpty(res._body);
          assert.containsAllKeys(category, [
            "id",
            "name",
            "UpdatedAt",
            "CreatedAt",
          ]);
        });
      })
      .then(
        () => done(),
        (err) => done(err)
      );
  });

  describe("GET /api/wiki-ideas/getCategory/id ", () => {
    it("should return category with id", (done) => {
      request(app)
        .get("/api/wiki-ideas/getCategory/1")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((res) => {
          assert.equal(res._body.id, 1);
          assert.isNotEmpty(res._body);
          assert.containsAllKeys(res._body, [
            "id",
            "name",
            "UpdatedAt",
            "CreatedAt",
          ]);
        })
        .then(
          () => done(),
          (err) => done(err)
        );
    });
  });
});

describe("GET /api/wiki-ideas/getPagedCategories ", () => {
  it("should return a range of category", (done) => {
    request(app)
      .get("/api/wiki-ideas/getPagedCategories/?take=4&skip=3")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        assert.isNotEmpty(res._body);
        res.body.forEach((category) => {
          assert.containsAllKeys(category, [
            "id",
            "name",
            "UpdatedAt",
            "CreatedAt",
          ]);
        });
      })
      .then(
        () => done(),
        (err) => done(err)
      );
  });
});
