exports.validate = (schema) => (req, res, next) => {
  const {
    error
  } = schema.validate(req.body)
  if (error?.details[0].context?.limit) {
    res.status(400)
    .send({
      status: 400,
      code: '400',
      data: null,
      message: `${error?.details[0].message}`
    })
  }

  if (error) {
    res.status(400)
      .send({
        status: 400,
        code: '400',
        data: null,
        message: `${error?.details[0].context.label} is required`
      })
  } else {
    next()
  }
}