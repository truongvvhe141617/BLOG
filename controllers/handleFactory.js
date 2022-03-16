
exports.createOne = (Model) => async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        data: newDoc,
      },
    });
  };

  exports.getOne = (Model, popOptions) => async (req, res, next) => {
    let query = Model.findById(req.params.id);

    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) res.status(404).json('No document found with that ID');

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  };

  exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const id = req.params.id;

    const doc = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) res.status(404).json('No document found with that ID');

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const id = req.params.id;

    const doc = await Model.findByIdAndDelete(id);

    if (!doc) res.status(404).json('No document found with that ID');

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });