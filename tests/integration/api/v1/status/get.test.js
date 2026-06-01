test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://ominous-spoon-5rqp6qqrjvq296p-3000.app.github.dev/api/v1/status",
  );

  expect(response.status).toBe(200);
});
