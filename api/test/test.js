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
        console.log(res._body);
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
